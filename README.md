# Twitch Redeem Spam

Definitive not the best way to do this, but it's 4a.m. and I just want to spam this stream.

## Steps
- Open Devtools and go to Network
- Filter for gql.twitch
- Redeem a reward
- A new ggl.twitch appears. Rightclick it and copy it as fetch
- Add the result into the section //fetch here in the spam.js file
- remove the lines credentials and priority
- change the line with transaction-id to
```
\"transactionID\":\""+Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)+"\"
```
- change the parameters in the script
- open fire pewpewpew
