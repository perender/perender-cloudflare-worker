const BOT_AGENTS = [
  "googlebot",
  "yahoo! slurp",
  "bingbot",
  "yandex",
  "baiduspider",
  "facebookexternalhit",
  "twitterbot",
  "rogerbot",
  "linkedinbot",
  "embedly",
  "quora link preview",
  "showyoubot",
  "outbrain",
  "pinterest/0.",
  "developers.google.com/+/web/snippet",
  "slackbot",
  "vkshare",
  "w3c_validator",
  "redditbot",
  "applebot",
  "whatsapp",
  "flipboard",
  "tumblr",
  "bitlybot",
  "skypeuripreview",
  "nuzzel",
  "discordbot",
  "google page speed",
  "qwantify",
  "pinterestbot",
  "bitrix link preview",
  "xing-contenttabreceiver",
  "chrome-lighthouse",
  "telegrambot",
  "integration-test", // Integration testing
  "google-inspectiontool",
  "Perplexity",
  "OAI-SearchBot",
  "ChatGPT",
  "GPTBot",
  "ClaudeBot",
  "Amazonbot"
];

const IGNORE_EXTENSIONS = [
  ".js",
  ".css",
  ".xml",
  ".less",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".pdf",
  ".doc",
  ".txt",
  ".ico",
  ".rss",
  ".zip",
  ".mp3",
  ".rar",
  ".exe",
  ".wmv",
  ".avi",
  ".ppt",
  ".mpg",
  ".mpeg",
  ".tif",
  ".wav",
  ".mov",
  ".psd",
  ".ai",
  ".xls",
  ".mp4",
  ".m4a",
  ".swf",
  ".dat",
  ".dmg",
  ".iso",
  ".flv",
  ".m4v",
  ".torrent",
  ".woff",
  ".ttf",
  ".svg",
  ".webmanifest",
];

//Hooks into the request, and changes origin if needed
export default {
  async fetch(request, env) {
    return await handleRequest(request, env).catch(
      (err) => new Response(err.stack, { status: 500 })
    );
  },
};

async function handleRequest(request, env) {
  let botAgent = null;
  const url = new URL(request.url);
  const userAgent = request.headers.get("User-Agent")?.toLowerCase() || "";
  const isPerender = request.headers.get("X-Perender");
  const pathName = url.pathname.toLowerCase();
  const extension = pathName
    .substring(pathName.lastIndexOf(".") || pathName.length)
    ?.toLowerCase();

  // Perender loop protection
  // Non robot user agent
  // Ignore extensions
  if (
    isPerender ||
    !BOT_AGENTS.some((bot) => {
      if (userAgent.includes(bot)) {
        botAgent = bot;
        return true;
      }
      return false;
    }) ||
    (extension.length && IGNORE_EXTENSIONS.includes(extension))
  ) {
    return fetch(request);
  }

  // Build Perender request
  const newURL = `https://api.perender.com/Render?url=${request.url}&botAgent=${encodeURIComponent(botAgent)}`;
  const newHeaders = new Headers(request.headers);

  //Add JWT Bearer token to header
  const jwtToken = env.PERENDER_TOKEN;
  if (jwtToken) {
    newHeaders.set("Authorization", `Bearer ${jwtToken}`);
  }

  return fetch(new Request(newURL, {
    headers: newHeaders,
    redirect: "manual",
  }));
}
