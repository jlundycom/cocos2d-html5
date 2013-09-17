/**
 * Created by jlundy on 9/16/13.
 */
var DefendingNumber = GameObject.extend({
    defendingValue:"1",
    getLabelString:function()
    {
        return this.defendingValue;
    },
    ctor:function(value)
    {
        this.defendingValue=value;
        this._super();

    }
});
