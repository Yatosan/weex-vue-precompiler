exports.processDiv = function (
  el,
  attrsMap,
  attrsList,
  attrs,
  staticClass
) {
  const finalClass = staticClass + ' weex-ct'
  el.staticClass = `"${finalClass}"`
}
