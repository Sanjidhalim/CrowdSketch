/**
 * Created by sanji on 4/9/2016.
 */
module.exports = function (name)
{
    var obj={};
    obj.count = 0;
    obj.name = name;
    obj.counterIncrement= function(){
        obj.count++;
    };
    obj.counterDecrement=function(){
        obj.count--;
    };
    obj.getCount=function(){
        return obj.count;
    };
    obj.getName = function(){
        return obj.name;
    }
    return obj;
};