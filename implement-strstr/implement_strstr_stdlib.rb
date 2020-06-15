# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
  return -1 unless haystack.include?(needle)

  haystack.index(needle)
end
