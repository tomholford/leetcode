# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
  expr = Regexp.new needle

  idx = expr =~ haystack

  idx.nil? ? -1 : idx 
end
