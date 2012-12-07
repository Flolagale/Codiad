(function(global, $){

    var codiad = global.codiad;

    //////////////////////////////////////////////////////////////////////
    // Sliding in dropdown menu
    //////////////////////////////////////////////////////////////////////

    codiad.dropdown = {
        menus: [],

        initMenuHandler: function(button,menu){
            var _this = this;
            var thisButton = button;
            var thisMenu = menu;

            this.menus.push(thisMenu);
            thisMenu.appendTo($('body'));

            thisButton.click(function(e){
                alert('click for dropdown');
                var wh = $(window).height();

                e.stopPropagation();

                // close other menus
                _this.closeMenus(thisMenu);

                thisMenu.css({
                    // display: 'block',
                    bottom: ( (wh - $(this).offset().top) + 8) + 'px',
                    left: ($(this).offset().left - 13) + 'px'
                });
                
                thisMenu.slideToggle('fast');

                // handle click-out autoclosing
                var fn = function(){
                    thisMenu.hide();
                    $(window).off('click', fn)
                }
                $(window).on('click', fn);
            });            
        },

        closeMenus: function(exclude){
            var menuId = exclude.attr("id");
            for(var i = 0; i < this.menus.length; i++){
                if(this.menus[i].attr("id") != menuId){
                    this.menus[i].hide();
                }
            }
        }
    };
})(this, jQuery);
