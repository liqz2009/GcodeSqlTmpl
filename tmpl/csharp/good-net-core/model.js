<% const now=new Date()%>
/**
 *
 * @author <%=Author%>
 * @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
 */

namespace <%=ModelsNamespace%>
{
    public class <%=ModelsName%>
    {
		<% tableColumns.forEach(function(col){ %>
		/// <summary>
		/// <%=col.COLUMN_COMMENT%>
		/// </summary>
		public <%=col.DATA_TYPE%><%if(!col.IS_NULLABLE){%>?<%}%> <%=col.ALIAS_NAME%>{ get; set; }
		<%});%>

    }
}
