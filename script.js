var canvas = new fabric.Canvas("canvas");

blockWidth = "";
blockHeight = "";

xCoordinate = "";
yCoordinate = "";

playerObject = "";
blockObject = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;
        playerObject.scaleToWidth(140);
        playerObject.scaleToHeight(140);
        playerObejct.set({
            top: yCoordinate, left: xCoordinate
        });
        canvas.add(playerObject);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top: yCoordinate, left: xCoordinate
        });
        canvas.add(blockObject);
    });
}