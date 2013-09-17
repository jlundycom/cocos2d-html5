/**
 * Created by jlundy on 9/16/13.
 */
var IncomingProblem = GameObject.extend({
    currentProblem:"2+2",
    speed:cc.p(0,-1),
    yVelocity:20,
    xVelocity:2,
    getLabelString:function()
    {
        return this.currentProblem;
    },
    ctor:function(value)
    {
        this.currentProblem=value;
        this._super();
        this.scheduleUpdate();

    },
    update:function(dt)
    {
        var p = this.getPosition();
        p.x -= this.xVelocity*dt;
        p.y -= this.yVelocity*dt;
        this.setPosition(p);
    }
});
