
/// <summary>
/// <%=UpdateDescription%>
/// </summary>
/// <returns></returns>
public void <%=UpdateServiceFunctionName%>(<%=UpdateParamsModelName%> pars)
{
	<%=TableName%> entity=_unitOfWork.<%=TableName%>Repository.Get(<%-UpdateSqlWhere%>);
	<% UpdateDataModel.forEach(function(col){ %>
  entity.<%=col.ALIAS_NAME%>=pars.<%=col.ALIAS_NAME%>;<%})%>
  _unitOfWork.<%=TableName%>Repository.Update(entity);
  _unitOfWork.SaveChanges();

}


