(function(){
  window.JST = window.JST || {};

  window.JST['search_box'] = function ({readOnly}) {
    return `
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
  };
  window.JST['search_facet'] = function ({model, readOnly}) {
    return `
      ${model.has('category') ? `<div class="category">${model.get('category')}: </div>` : ''}
      <div class="search_facet_input_container">
        <input type="text" class="search_facet_input ui-menu VS-interface" value="" ${readOnly ? 'disabled="disabled"' : ''} />
      </div>
      <div class="search_facet_remove VS-icon VS-icon-cancel">
        <i class="fa fa-times-circle"></i>
      </div>
    `;
  };
  window.JST['search_input'] = function ({readOnly}) {
    return `<input type="text" class="ui-menu" ${readOnly ? 'disabled="disabled"' : ''} />`;
  };
})();