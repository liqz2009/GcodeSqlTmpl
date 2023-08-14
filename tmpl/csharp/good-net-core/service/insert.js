/// <summary>
/// <%=InsertDescription%>
/// </summary>
/// <returns></returns>
public void <%=InsertServiceFunctionName%>(<%=InsertParamsModelName%> pars)
{
	<%=TableName%> entity=new <%=TableName%>();
	<% InsertParamsModel.forEach(function(col){ %>
    entity.<%=col.ALIAS_NAME%>=pars.<%=col.ALIAS_NAME%>;<%})%>
    _unitOfWork.<%=TableName%>Repository.Add(entity);
    _unitOfWork.SaveChanges();

}

