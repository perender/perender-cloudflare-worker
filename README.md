# Integrating PERENDER with Cloudflare
Updated at: https://doc.perender.com/cdn-integrations/cloudflare

# Step 1.
Open your Cloudflare dashboard (https://dash.cloudflare.com)

# Step 2.
In your left sidebar, select the <b>Workers & Pages</b> option
![image](https://github.com/perender/perender-cloudflare-worker/assets/155614699/040b3935-6259-4a07-b4be-e341a6a7e216)

# Step 3.
Click the <b>Create Worker</b> button
![image](https://github.com/perender/perender-cloudflare-worker/assets/155614699/c9c3c915-ee9f-4b3b-8cbc-ca4c1da623f3)

# Step 4.
1. Define the name of your <b>Worker</b> (A) (Example: perender-worker)
2. After that, click the <b>Deploy</b> button (B)
![image](https://github.com/perender/perender-cloudflare-worker/assets/155614699/9a5672d9-ac41-4057-bd4e-2191bf055a2f)

# Step 5.
Click on <b>Edit code</b>
![image](https://github.com/perender/perender-cloudflare-worker/assets/155614699/af1e7177-f5a8-405b-945a-b172b136ddaf)

# Step 6.
1. Copy the code provided at the following address (https://github.com/perender/perender-cloudflare-worker/blob/main/index.js)
2. Paste the code into the <b>Cloudflare editor</b> as shown in the image (A)
3. After that, click the <b>Save and Deploy</b> button (B)
4. Click on (C) to <b>return</b> to the worker's configuration
![image](https://github.com/perender/perender-cloudflare-worker/assets/155614699/09e64b0e-45f7-46d8-b6cf-75001474debb)

# Step 7.
1. In the worker settings, select the <b>Triggers</b> tab (A)
2. Click the <b>Add route</b> button (B)
![image](https://github.com/perender/perender-cloudflare-worker/assets/155614699/997e4d23-8a16-4f4f-a397-49f60283be8c)

# Step 8.
1. Define the <b>Route</b> (A)
2. Define the <b>Zone</b> (B)
3. Click the <b>Add route</b> button (C)
![image](https://github.com/perender/perender-cloudflare-worker/assets/155614699/00106c22-8fdd-4f49-9651-a05e8effab7b)

# Step 9.
1. In the worker settings, select the <b>Settings</b> tab (A)
2. Then select <b>Variables</b> (B)
3. Click the <b>Add variables</b> button (C)
![image](https://github.com/perender/perender-cloudflare-worker/assets/155614699/935dcd7e-6d17-4f4b-b285-2c06a2b7f65b)

# Step 10. (final)
1. Set the name of your variable as <b>PERENDER_TOKEN</b> (A)
2. In the <b>variable value</b>, paste the <b>PERENDER TOKEN</b>, which you can obtain from the dashboard (https://dashboard.perender.com/)
3. Click the <b>Save and Deploy</b> button (C)
![image](https://github.com/perender/perender-cloudflare-worker/assets/155614699/7ab7e9eb-c001-4196-bf39-59135dae963b)
