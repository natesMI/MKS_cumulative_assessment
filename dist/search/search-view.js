angular.module("twittler.search",[]).controller("TwittlerSearch",function(e,t){console.log("search view is connected"),e.search=function(o){return"@"!==o[0]||-1!==o.indexOf(" ")?void(e.errMessage="Please enter a valid Twitter handle"):(o=o.slice(1),t.getUserProfile(o).then(function(t){console.log("This is the user profile: ",t.data[0]),e.profile=t.data[0]}),void t.getUserFeed(o).then(function(t){console.log("This is search data: ",t),e.feed=t.data}))}});