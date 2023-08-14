 private <%=TableName%>Repository _<%=TableName%>Repository;
 public <%=TableName%>Repository <%=TableName%>Repository {
    get
    {
        if (_<%=TableName%>Repository == null) 
		    _<%=TableName%>Repository = (new <%=TableName%>Repository(context));
        return _<%=TableName%>Repository;
    }
}