var GameLayer = cc.Layer.extend({
    init:function()
    {
        this._super();
        var s = cc.Director.getInstance().getWinSize();
        var layer1 = cc.LayerColor.create(new cc.Color4B(255, 255, 0, 255), 600, 600);
        layer1.setAnchorPoint(new cc.Point(0.5,0.5));
        var incoming=new IncomingProblem("5+5");
        layer1.addChild(incoming);
        var defender1=new DefendingNumber("10");
        var defender2=new DefendingNumber("20");
        defender1.setPosition(cc.p(20,20));
        defender2.setPosition(cc.p(550,20));
        layer1.addChild(defender1);
        layer1.addChild(defender2);
        this.addChild(layer1);
        return true;
    }

});

var MyGameLayerScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild(layer);
    }
})
