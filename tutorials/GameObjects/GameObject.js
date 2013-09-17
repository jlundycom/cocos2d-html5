/**
 * Created by jlundy on 9/16/13.
 */
var GameObject = cc.Node.extend({
    position:cc.p(300,400),
    label:null,
    createLabel:function()
    {
      this.label=cc.LabelTTF.create(this.getLabelString(),"Arial",33);
    },
    getLabelString:function()
    {
        return "TEST";
    },
    ctor:function()
    {
        this._super();
        this.createLabel();
        this.label.setColor(new cc.Color3B(255,0,0));
        this.setPosition(this.position);
        this.addChild(this.label);
    }
});