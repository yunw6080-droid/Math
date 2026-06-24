gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.idToCallbackMap = new Map();
gdjs.startCode.GDStartObjects1= [];
gdjs.startCode.GDStartObjects2= [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];
gdjs.startCode.GDNewText2Objects1= [];
gdjs.startCode.GDNewText2Objects2= [];
gdjs.startCode.GDLeaveObjects1= [];
gdjs.startCode.GDLeaveObjects2= [];
gdjs.startCode.GDNewText3Objects1= [];
gdjs.startCode.GDNewText3Objects2= [];
gdjs.startCode.GDClearTextObjects1= [];
gdjs.startCode.GDClearTextObjects2= [];
gdjs.startCode.GDBestAttackTextObjects1= [];
gdjs.startCode.GDBestAttackTextObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "choose", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.startCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDStartObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDStartObjects1[k] = gdjs.startCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "choose", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "Y", null);
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "javascript:history.back()", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leave"), gdjs.startCode.GDLeaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDLeaveObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDLeaveObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDLeaveObjects1[k] = gdjs.startCode.GDLeaveObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDLeaveObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "javascript:history.back()", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("");
}
{gdjs.evtTools.network.sendAsyncRequest("https://math-opyu.onrender.com/api/clears", "", "GET", "", runtimeScene.getGame().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.string.strFind(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), "clearCount") != -1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestAttackText"), gdjs.startCode.GDBestAttackTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ClearText"), gdjs.startCode.GDClearTextObjects1);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getGame().getVariables().getFromIndex(2));
}
{for(var i = 0, len = gdjs.startCode.GDClearTextObjects1.length ;i < len;++i) {
    gdjs.startCode.GDClearTextObjects1[i].getBehavior("Text").setText("總通關次數：" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("clearCount")));
}
}
{for(var i = 0, len = gdjs.startCode.GDBestAttackTextObjects1.length ;i < len;++i) {
    gdjs.startCode.GDBestAttackTextObjects1[i].getBehavior("Text").setText("最佳最少攻擊紀錄：" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("bestAttack")) + " 次");
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDStartObjects1.length = 0;
gdjs.startCode.GDStartObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewText2Objects1.length = 0;
gdjs.startCode.GDNewText2Objects2.length = 0;
gdjs.startCode.GDLeaveObjects1.length = 0;
gdjs.startCode.GDLeaveObjects2.length = 0;
gdjs.startCode.GDNewText3Objects1.length = 0;
gdjs.startCode.GDNewText3Objects2.length = 0;
gdjs.startCode.GDClearTextObjects1.length = 0;
gdjs.startCode.GDClearTextObjects2.length = 0;
gdjs.startCode.GDBestAttackTextObjects1.length = 0;
gdjs.startCode.GDBestAttackTextObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDStartObjects1.length = 0;
gdjs.startCode.GDStartObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewText2Objects1.length = 0;
gdjs.startCode.GDNewText2Objects2.length = 0;
gdjs.startCode.GDLeaveObjects1.length = 0;
gdjs.startCode.GDLeaveObjects2.length = 0;
gdjs.startCode.GDNewText3Objects1.length = 0;
gdjs.startCode.GDNewText3Objects2.length = 0;
gdjs.startCode.GDClearTextObjects1.length = 0;
gdjs.startCode.GDClearTextObjects2.length = 0;
gdjs.startCode.GDBestAttackTextObjects1.length = 0;
gdjs.startCode.GDBestAttackTextObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
