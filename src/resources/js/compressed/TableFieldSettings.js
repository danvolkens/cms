!function(t){Craft.TableFieldSettings=Garnish.Base.extend({columnsTableName:null,defaultsTableName:null,columnsTableId:null,defaultsTableId:null,columnsTableInputPath:null,defaultsTableInputPath:null,defaults:null,columnSettings:null,columnsTable:null,defaultsTable:null,init:function(t,e,l,a,s){this.columnsTableName=t,this.defaultsTableName=e,this.columnsTableId=Craft.formatInputId(this.columnsTableName),this.defaultsTableId=Craft.formatInputId(this.defaultsTableName),this.columnsTableInputPath=this.columnsTableId.split("-"),this.defaultsTableInputPath=this.defaultsTableId.split("-"),this.defaults=a,this.columnSettings=s,this.initColumnsTable(),this.initDefaultsTable(l)},initColumnsTable:function(){this.columnsTable=new Craft.EditableTable(this.columnsTableId,this.columnsTableName,this.columnSettings,{rowIdPrefix:"col",onAddRow:t.proxy(this,"onAddColumn"),onDeleteRow:t.proxy(this,"reconstructDefaultsTable")}),this.initColumnSettingInputs(this.columnsTable.$tbody),this.columnsTable.sorter.settings.onSortChange=t.proxy(this,"reconstructDefaultsTable")},initDefaultsTable:function(t){this.defaultsTable=new Craft.EditableTable(this.defaultsTableId,this.defaultsTableName,t,{rowIdPrefix:"row"})},onAddColumn:function(t){this.reconstructDefaultsTable(),this.initColumnSettingInputs(t)},initColumnSettingInputs:function(t){var e=t.find("td:first-child textarea, td:nth-child(3) textarea"),l=t.find("td:nth-child(4) select");this.addListener(e,"textchange","reconstructDefaultsTable"),this.addListener(l,"change","reconstructDefaultsTable")},reconstructDefaultsTable:function(){for(var t=Craft.expandPostArray(Garnish.getPostData(this.columnsTable.$tbody)),e=Craft.expandPostArray(Garnish.getPostData(this.defaultsTable.$tbody)),l=0;l<this.columnsTableInputPath.length;l++){t=t[this.columnsTableInputPath[l]]}for(l=0;l<this.defaultsTableInputPath.length;l++){e=e[this.defaultsTableInputPath[l]]}var a='<table id="'+this.defaultsTableId+'" class="editable shadow-box"><thead><tr>';for(var s in t)a+='<th scope="col" class="header">'+(t[s].heading?t[s].heading:"&nbsp;")+"</th>";for(var n in a+='<th class="header" colspan="2"></th></tr></thead><tbody>',e)a+=Craft.EditableTable.getRowHtml(n,t,this.defaultsTableName,e[n]);a+="</tbody></table>",this.defaultsTable.$table.replaceWith(a),this.defaultsTable.destroy(),delete this.defaultsTable,this.initDefaultsTable(t)}})}(jQuery);
//# sourceMappingURL=TableFieldSettings.js.map