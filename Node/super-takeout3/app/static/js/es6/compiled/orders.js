(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('form#order').on('change', '.menu', getMenu);
    $('form#order').on('change', '.dish', formChanged);
    $('form#order').on('click', '.nuke', delMenu);
    $('form#order').on('change', 'input', formChanged);
    $('form#order').on('blur', 'input', formChanged);
    $('#logout').click(logout);
    $('#add').click(add);
  }
  function logout() {
    console.log('clicked');
    ajax("/logout", 'get', null, (function(h) {
      document.location.replace('/');
      console.log(h);
    }));
  }
  function formChanged() {
    var item = $(this).parent();
    updateCost(item);
  }
  function updateCost(item) {
    updateSubTotal(item);
    updateTotal();
  }
  function updateSubTotal(item) {
    var subtotal = 0;
    var qty = item.find('input').val() * 1;
    var cost = item.find('.dish option:selected').attr('data-cost') * 1;
    if (qty > 0 && !isNaN(cost)) {
      subtotal = (qty * cost);
    }
    item.data('subtotal', subtotal);
  }
  function updateTotal() {
    var subtotals = $('.menu-item').map((function(i, d) {
      return $(d).data('subtotal');
    })).toArray();
    var total = 0;
    if (subtotals.length) {
      total = subtotals.reduce((function(p, c) {
        return p + c;
      }));
    }
    $('#total').text('$' + total.toFixed(2));
  }
  function add() {
    var item = $('form#order > .menu-item:last-child');
    $('form#order').append(item.clone());
  }
  function delMenu(e) {
    if ($('form#order > .menu-item').length > 1) {
      $(this).parent().remove();
      updateTotal();
    }
    e.preventDefault();
  }
  function getMenu() {
    var menu = $(this).val();
    var next = $(this).next();
    ajax(("/dishes/" + menu), 'get', null, (function(h) {
      next.empty().append(h);
      updateCost(next.parent());
    }));
  }
})();

//# sourceMappingURL=orders.map
