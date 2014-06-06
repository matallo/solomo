(function($) {
    var Capture = {
        initialize: function() {
            this._initBindings();
        },

        _initBindings: function() {
            var that = this;

            $('.save').on('mousedown', function(e) {
                e.preventDefault();

                that._onClick();
            });

            $('.save').on('click', function(e) {
                e.preventDefault();

                that._onClick();
            });
        },

        _onClick: function(evt) {
            var account = "trailnotes",
                sql = "INSERT INTO untitled_table (name, description, image, the_geom) VALUES ('"+$('input').val()+"', '"+$('textarea').val()+"', '"+$('#picture').attr('src')+"', ST_SetSRID(ST_Point(39.474216404351694, -0.3733205795288086),4326))";
            alert('aqui?');
            $.ajax({
                url: "http://"+account+".cartodb.com/api/v2/sql?q="+sql+"&api_key=8c6d85e2e65aba7a23bf4bd8d7dfe029345e9db5",
                type: "POST",
                success: function(data) {
                    alert("HURACÁN!")
                },
                error: function() {
                    alert("NADA DE HURACANES!");
                }
            });
        }
    }

    $(function() {
        Capture.initialize();
    });

})(jQuery);