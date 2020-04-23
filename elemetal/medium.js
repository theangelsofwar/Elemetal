const https = require('https');
const fs = require('fs');
const parseString = require('xml2js').parseString;
const feedUrl = "https://medium.com/feed/@artemis-labs-os";
const blogPath = "content/blog";


const parseMediumXML = (xmlString) => {
  parseString(xmlString, function(err, result) {
    const { rss = {} } = result;
    const { channel = [] } = rss;
    const { item = [] } = channel[0];
    
    for(let i = 0; i < item.length; i++) {
      const link = item[i].link[0] || "";
      const fileName = link.substring(link.lastIndexOf("/") + 1, link.lastIndexOf("?"))
      console.log(`Generating JSOn from for link ${link}`);
      fs.writeFile(`${blogPath}/${fileName}.json`, JSON.stringify(item[i], null, 4), () => {
        console.log("Done");
      });
    }
  });
};

const fetchMediumXML = () => {
  console.log("fetching medium articles...");
  https.get(feedUrl, resp => {
    let data = "";

    resp.on("data", chunk => {
      console.log("receiving chunk...");
      data += chunk;
    });

    resp.on("end", () => {
      console.log("whole response receieved");
      parseMediumXML(data);
    });
  })
  .on("error", err => {
    console.log("Fetch error: " + err.message);
  });
}

fetchMediumXML();