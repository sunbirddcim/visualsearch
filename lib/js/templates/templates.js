(function(){
// window.JST = window.JST || {};

// window.JST['search_box'] = _.template('<div class="VS-search <% if (readOnly) { %>VS-readonly<% } %>">\n  <div class="VS-search-box-wrapper VS-search-box">\n    <div class="VS-icon VS-icon-search"><i class="fa fa-search"></i></div>\n    <div class="VS-placeholder"></div>\n    <div class="VS-search-inner"></div>\n    <div class="VS-icon VS-icon-cancel VS-cancel-search-box" title="clear search"><i class="fa fa-times-circle"></i></div>\n  </div>\n</div>');
// window.JST['search_facet'] = _.template('<% if (model.has(\'category\')) { %>\n  <div class="category"><%- model.get(\'category\') %>:</div>\n<% } %>\n\n<div class="search_facet_input_container">\n  <input type="text" class="search_facet_input ui-menu VS-interface" value="" <% if (readOnly) { %>disabled="disabled"<% } %> />\n</div>\n\n<div class="search_facet_remove VS-icon VS-icon-cancel"><i class="fa fa-times-circle"></i></div>');
// window.JST['search_input'] = _.template('<input type="text" class="ui-menu" <% if (readOnly) { %>disabled="disabled"<% } %> />');

// window["JST"] = window["JST"] || {};

// window["JST"]["search_box"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="VS-search '; if (readOnly) { ;__p += 'VS-readonly'; } ;__p += '">\n  <div class="VS-search-box-wrapper VS-search-box">\n    <div class="VS-icon VS-icon-search"></div>\n    <div class="VS-placeholder"></div>\n    <div class="VS-search-inner"></div>\n    <div class="VS-icon VS-icon-cancel VS-cancel-search-box" title="clear search"></div>\n  </div>\n</div>';}return __p};

// window["JST"]["search_facet"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) { if (model.has('category')) { ;__p += '\n  <div class="category">' +__e( model.get('category') ) +':</div>\n'; } ;__p += '\n\n<div class="search_facet_input_container">\n  <input type="text" class="search_facet_input ui-menu VS-interface" value="" '; if (readOnly) { ;__p += 'disabled="disabled"'; } ;__p += ' />\n</div>\n\n<div class="search_facet_remove VS-icon VS-icon-cancel"></div>';}return __p};

// window["JST"]["search_input"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<input type="text" class="ui-menu" '; if (readOnly) { ;__p += 'disabled="disabled"'; } ;__p += ' />';}return __p};

window.JST = window.JST || {};
  window.JST['search_box'] = function (readOnly) {
    let template = `
      <div class="VS-search${readOnly ? ' VS-readonly' : ''}">
        <div class="VS-search-box-wrapper VS-search-box">
          <div class="VS-icon VS-icon-search">
            <i class="fa fa-search"></i>
          </div>
          <div class="VS-placeholder"></div>
          <div class="VS-search-inner"></div>
          <div class="VS-icon VS-icon-cancel VS-cancel-search-box" title="clear search">
            <i class="fa fa-times-circle"></i>
          </div>
        </div>
      </div>
      `;
    return _.escape(template);
  };
  window.JST['search_facet'] = function (model, readOnly) {
    let template = `
      ${model.has('category') ? `<div class="category">${model.get('category')}: </div>` : ''}
      <div class="search_facet_input_container">
        <input type="text" class="search_facet_input ui-menu VS-interface" value="" ${readOnly ? 'disabled="disabled"' : ''} />
      </div>
      <div class="search_facet_remove VS-icon VS-icon-cancel">
        <i class="fa fa-times-circle"></i>
      </div>
    `;
    return _.escape(template);
  };
  window.JST['search_input'] = function (readOnly) {
    let template = `<input type="text" class="ui-menu" ${readOnly ? 'disabled="disabled"' : ''} />`;
    return _.escape(template);
  };
})();