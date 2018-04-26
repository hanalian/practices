//ԭ�����̳�
function SuperType()
{
    this.property=true;
}
SuperType.prototype.getSuperValue=function(){
    return this.property;
};
function SubType()
{
    this.subProperty=false;
}
//�̳�SuperType
SubType.prototype=new SuperType();
SubType.prototype.getSubValue=function(){
    return this.subProperty;
}

var instance=new SubType();
alert(instance.getSuperValue());//true



//���ù��캯���̳�
function SuperType()
{
    this.colors=["red","blue","green"];
}

function SubType()
{
    //�̳�SuperType
    SuperType.call(this);
}

var instance1=new SubType();
instance1.colors.push("black");
alert(instance1.colors);//"red","blue","green","black"

var instance2=new SubType();
alert(instance2.colors);//"red","blue","green"

function SuperType(name)
{
    this.name=name;
}

function SubType()
{
    //�̳�SuperType
    SuperType.call(this,"Jim");
    this.age=28;
}

var instance1=new SubType();
alert(instance1.name);//"Jim"
alert(instance1.age);//28



//��ϼ̳�
function SuperType(name)
{
    this.name=name;
    this.colors=["red","blue","green"];
}
SuperType.prototype.sayName=function(){
    alert(this.name);
};
function SubType(name,age)
{
    //�̳�SuperType
    SuperType.call(this,name);
    this.age=age;
}
SubType.prototype=new SuperType();
SubType.prototype.sayAge=function(){
    alert(this.age);
}
var instance1=new SubType("Jim",29);
instance1.colors.push("black");
alert(instance1.colors);//"red","blue","green","black"
instance1.sayName();//"Jim"
instance1.sayAge();//29

var instance2=new SubType("Jack",28);
alert(instance2.colors);//"red","blue","green"
instance2.sayName();//"Jack"
instance2.sayAge();//28



//�������ʽ�̳�
function object(o)
{
    function F(){}
    F.prototype=o;
    return new F();
}
function inheritPrototype(subType,superType)
{
    var prototype =object(superType.prototype);
    prototype.constructor=subType;
    subType.prototype=prototype;
}
function SuperType(name)
{
    this.name=name;
    this.colors=["red","blue","green"];
}
SuperType.prototype.sayName=function(){
    alert(this.name);
};
function SubType(name,age)
{
    //�̳�SuperType
    SuperType.call(this,name);
    this.age=age;
}
inheritPrototype(SubType,SuperType);
SubType.prototype.sayAge=function(){
    alert(this.age);
}
var instance1=new SubType("Jim",29);
instance1.colors.push("black");
alert(instance1.colors);//"red","blue","green","black"
instance1.sayName();//"Jim"
instance1.sayAge();//29

var instance2=new SubType("Jack",28);
alert(instance2.colors);//"red","blue","green"
instance2.sayName();//"Jack"
instance2.sayAge();//28
