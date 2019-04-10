arr = [1,4,5,7,12,19,45,101]
a = arr.map{ |i| i*2 - (5-i) } && b = arr.map{|a| a % 2 == 0}
puts b