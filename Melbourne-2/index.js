function ClearContent(id)
{
    var tagId = "tag" + id;
    var commentId = "comment" + id;
    document.getElementById(tagId).value = "";
    document.getElementById(commentId).value = "";
    if(id!=5)
    {
        for(var i=id; i<5; i++)
        {
            document.getElementById("tag" + parseInt(i)).value = document.getElementById("tag"+ (parseInt(i)+1)).value;
            document.getElementById("comment" + parseInt(i)).value = document.getElementById("comment"+ (parseInt(i)+1)).value;
            document.getElementById("tag" + (parseInt(i)+1)).value = "";
            document.getElementById("comment" + (parseInt(i)+1)).value = "";
        }
    }
}