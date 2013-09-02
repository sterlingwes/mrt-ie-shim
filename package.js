Package.describe({
    summary: "IE polyfills"
});

Package.on_use(function(api) {
    api.add_files(['client/lib/polyfills.js'], 'client');
});