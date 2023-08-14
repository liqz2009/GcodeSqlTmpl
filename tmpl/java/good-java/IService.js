package <%=IServiceNamespace%>;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.good.domain.entity.<%=TableName%>;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.List;
import java.time.LocalDateTime;
import java.util.HashMap;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
<% const now=new Date()%>
/**
 *<%=tableComment%>
 * @author <%=Author%>
 * @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
 */
public interface <%=TableName%>IService extends IService<<%=TableName%>> {

}
