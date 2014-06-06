(function($) {
    var Capture = {
        initialize: function() {
            this._initBindings();
        },

        _initBindings: function() {
            var that = this;

            $('.save').on('click', function(e) {
                e.preventDefault();

                that._uploadImage();
            });
        },

        _uploadImage: function() {

            Parse.initialize("hjC3J6H8vpfTOwb3JQt4mXGQkzu3yuABBPbomGAf", "MGvKQJoqqOAav85n2r1cvChy14KdEWANZ0ZwJVPI");
            var file = new Parse.File(Date.now() + '.jpg', { "base64": document.getElementById('picture').src });

            file.save().then(function(evt) {
                console.log(file.url());
                var account = "trailnotes",
                    sql = "INSERT INTO untitled_table (name, description, image, the_geom) VALUES ('"+$('input').val()+"', '"+$('textarea').val()+"', '"+file.url()+"', ST_SetSRID(ST_Point(39.474216404351694, -0.3733205795288086),4326))";
                $.ajax({
                    url: "http://"+account+".cartodb.com/api/v2/sql?q="+sql+"&api_key=8c6d85e2e65aba7a23bf4bd8d7dfe029345e9db5",
                    type: "POST",
                    success: function(data) {
                        console.log(data);
                    },
                    error: function() {
                        alert("NADA DE HURACANES!");
                    }
                });
            }, function() {
                console.log(arguments);
            });
        }
    };

    $(function() {
        Capture.initialize();
    });

})(jQuery);