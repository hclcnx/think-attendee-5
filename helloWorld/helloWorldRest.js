var xhrargs = {
url: "/connections/opensocial/rest/people/@me/@self",
handleAs: "json"
};

var deferred = dojo.xhrGet(xhrargs);
deferred.then(
function(results) {
dojo.query("span.share-title")[0].textContent="hello " + results.entry.displayName + "! ";
}
);
