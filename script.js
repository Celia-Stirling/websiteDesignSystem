
$(document).ready(() => {

    $('.font-box').on('mouseenter', event => {
        $(event.currentTarget).addClass('font-box-active');
        $(event.currentTarget).children().addClass('font-active');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('font-box-active');
        $(event.currentTarget).children().removeClass('font-active');
    })

    $('#lobster').on('mouseenter', () => {
        $('#lobster').children().text('Lobster');
    }).on('mouseleave', () => {
        $('#lobster').children().text("Life isn't finding shelter in the storm. It's about learning to dance in the rain.");
    })

    $('#roboto').on('mouseenter', () => {
        $('#roboto').children().text('Roboto');
    }).on('mouseleave', () => {
        $('#roboto').children().text("Life isn't finding shelter in the storm. It's about learning to dance in the rain.");
    })

    $('#montserrat').on('mouseenter', () => {
        $('#montserrat').children().text('Montserrat');
    }).on('mouseleave', () => {
        $('#montserrat').children().text("Life isn't finding shelter in the storm. It's about learning to dance in the rain.");
    })

    $('#verdana').on('mouseenter', () => {
        $('#verdana').children().text('Verdana');
    }).on('mouseleave', () => {
        $('#verdana').children().text("Life isn't finding shelter in the storm. It's about learning to dance in the rain.");
    })

    $('#oswald').on('mouseenter', () => {
        $('#oswald').children().text('Oswald');
    }).on('mouseleave', () => {
        $('#oswald').children().text("Life isn't finding shelter in the storm. It's about learning to dance in the rain.");
    })

    $('#dancing-script').on('mouseenter', () => {
        $('#dancing-script').children().text('Dancing-Script');
    }).on('mouseleave', () => {
        $('#dancing-script').children().text("Life isn't finding shelter in the storm. It's about learning to dance in the rain.");
    })

    $('#source-code-pro').on('mouseenter', () => {
        $('#source-code-pro').children().text('Source Code Pro');
    }).on('mouseleave', () => {
        $('#source-code-pro').children().text("Life isn't finding shelter in the storm. It's about learning to dance in the rain.");
    })

    $('#luckiest-guy').on('mouseenter', () => {
        $('#luckiest-guy').children().text('Luckiest Guy');
    }).on('mouseleave', () => {
        $('#luckiest-guy').children().text("Life isn't finding shelter in the storm. It's about learning to dance in the rain.");
    })

    $('#gloria-hallelujah').on('mouseenter', () => {
        $('#gloria-hallelujah').children().text('Gloria Hallelujah');
    }).on('mouseleave', () => {
        $('#gloria-hallelujah').children().text("Life isn't finding shelter in the storm. It's about learning to dance in the rain.");
    })
    
  });


