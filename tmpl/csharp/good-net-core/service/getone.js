<%

	if(GetOneDataModel){
		data=''
		GetOneDataModel.forEach(function(col){
			if(data!=''){data+=','}
			data+=`${col.ALIAS_NAME}=t.${col.ALIAS_NAME}`
		})
		if(data!='') data=`t=>new ${GetOneDataModelName}{${data}}`
	}
%>
/// <summary>
/// <%=GetOneDescription%>
/// </summary>
/// <returns></returns>
public <%=GetOneDataModelName%>? <%=GetOneServiceFunctionName%>(<%=GetOneParamsModelName%> pars)
{
	<% if(GetOneSqlWhere && data)  {%>
	var data = _unitOfWork.<%=TableName%>Repository.Get(<%-GetOneSqlWhere%>,<%-data%>);
	<%}else if (GetOneSqlWhere){%>
	var data = _unitOfWork.<%=TableName%>Repository.Get(<%-GetOneSqlWhere%>);
	<%}else if (data){%>
	var data = _unitOfWork.<%=TableName%>Repository.Get(<%-data%>);
	<%}else{%>
	var data = _unitOfWork.<%=TableName%>Repository.Get();
	<%}%>
	return data;

}

