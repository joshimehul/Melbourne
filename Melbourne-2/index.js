function ClearContent(id)
{
    var tagId = "tag" + id;
    var commentId = "comment" + id;
    document.getElementById(tagId).value = "";
    document.getElementById(commentId).value = "";
}