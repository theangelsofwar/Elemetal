module.exports = {
  render: function(data) {
    var template = `\
---
slug: ${data.titleForSlug}
date: ${data.published}
title: "${data.title}"
template: "post"
draft: false
description: "${data.description}"
category: ""
tags: "[${data.description}]"
---
${data.body}`;

    return template;
  }, 
  getOptions: function() {
    return {
      folderForEachSlug: false,
      imagePath: '/media',
      imageFolder: 
        '/Users/yvevestaltitan/Elemetal/elemetal/blog/static/media',
      defaultCodeBlockLanguage: '',
    };
  },
};