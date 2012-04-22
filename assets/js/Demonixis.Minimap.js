var Demonixis = Demonixis || {};

Demonixis.MiniMap = function (width, height)
{
    this.width = width;
    this.height = height;
    this.blockSize = { width: 5, height: 5};
    this.playerPosition = { x: 0, y: 0};
    this.miniMap = document.createElement("canvas");
    this.ctx = this.miniMap.getContext("2d");
    
    this.create = function(top, left, position, border)
    {
        var stylePosition = "position:absolute;";
        var styleTop = "10px;";
        var styleLeft = "10px;";
        var styleBorder = "1px solid black;";
        
        if (typeof position != 'undefined')
        {
            stylePosition = "position:" + position + ";";
        }
        
        if (typeof top != 'undefined') 
        {
            styleTop = "top:" + top + "px;";
        }
        
        if (typeof left != 'undefined')
        {
            styleLeft = "left:" + left + "px;";
        }
        
        if (typeof border != 'undefined')
        {
            styleBorder = "border:" + border + ";";
        }
        
        this.miniMap.setAttribute("width", this.width * this.blockSize.width);
        this.miniMap.setAttribute("height", this.height * this.blockSize.height);
        this.miniMap.setAttribute("id", "miniMap");
        this.miniMap.setAttribute("style", stylePosition + "top:" + styleTop + "left:" + styleLeft + styleBorder);
        
        document.getElementById("canvasContainer").appendChild(this.miniMap);
    }
    
    this.draw = function(x, y, id)
    {
        if (id == 1)
        {
            this.ctx.fillStyle = "white";
        }
        else if (id == 'D')
        {
            this.ctx.fillStyle = "red";
            this.playerPosition = {x: x, y: y};
        }
        else if (id == 'J')
        {
            this.ctx.fillStype = "yellow";
        }
        else if (id == 'A')
        {
            this.ctx.fillStyle = "blue";
        }
        else 
        {
            this.ctx.fillStyle = "rgb(200, 200, 200)";
        }
        
        this.ctx.fillRect(x * 5, y * 5, 5, 5);
    }
    
    this.update = function (newPlayerPosition)
    {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.playerPosition.x * this.blockSize.width, this.playerPosition.y * this.blockSize.height, this.blockSize.width, this.blockSize.height);
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(newPlayerPosition.x * this.blockSize.width, newPlayerPosition.y * this.blockSize.height, this.blockSize.width, this.blockSize.height);
        this.playerPosition = newPlayerPosition;
    }
    
    this.drawAt = function (x, y, color)
    {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.blockSize.width, y * this.blockSize.height, this.blockSize.width, this.blockSize.height);
    }
}