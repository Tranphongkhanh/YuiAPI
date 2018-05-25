/**
 * 分组View
 * Created by Yuiitsu on 2018/05/25.
 */
View.extend('group', function() {

    this.list = function() {
        return `
            <div class="history-group-action">
                <button class="btn btn-primary" id="history-group-new">New Group</button>           
            </div>
            {{ if data && data.length > 0 }}
            <ul>
                {{ for var i in data }}
                <li data-group-id="{{ data[i]['group_id'] }}">{{ data[i]['name'] }}</li>           
                {{ end }}
            </ul>
            {{ else }}
            <div class="history-group-empty">
               <em>Nothing in your group.</em>
            </div>
            {{ end }}
        `;
    };

    this.form = function() {
        return `
            <div class="history-group-form">
                <label>Group Name</label>       
                <div class="h-30">
                    <input type="text" class="input-text" placeholder="Enter group name" id="history-group-name" />
                </div>
                <div class="h-30">
                    <button class="btn btn-primary" id="history-group-save">Save</button>
                </div>
            </div>
        `;
    };

    this.select = function() {
        return `
            <select class="history-group-selector">
                <option value="">select group</option>
                {{ for var i in data }}
                <option value="{{ data[i]['group_id'] }}">{{ data[i]['name'] }}</option>
                {{ end }}
            </select>
        `;
    };
});