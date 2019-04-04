def assert(a, b)
	if a != b 
		throw
	else
		true
	end
end

class Branch
	attr_accessor :value
	attr_accessor :left
	attr_accessor :right

	def initialize(value)
		@value = value
	end

	def < branch
		return @value < branch.value
	end

	def > branch
		return @value > branch.value
	end

	def == branch
		if branch.respond_to?(:value)
			return @value == branch.value
		else
			return @value == branch
		end
	end
end

class Tree
	attr_accessor :root

	def initialize(value)
		@root = Branch.new(value)
	end
	
	def add(value)
		build(@root, Branch.new(value))
	end

	private

	def build(parent, branch)
		if (branch == parent)
			return
		end

		if (parent.left || parent.right)
			if (branch < parent)
				if (parent.left)
					if (branch < parent.left)
						build(parent.left, branch)
					elsif (branch > parent.left)
						build(parent.left, branch)
					end
				else
					parent.left = branch	
				end
			else
				if (parent.right) 
					if (branch < parent.right)
						build(parent.right, branch)
					elsif (branch > parent.right)
						build(parent.right, branch)
					end
				else
					parent.right = branch
				end	
			end
		else
			if (branch < parent)
				parent.left = branch
			else
				parent.right = branch
			end
		end
	end
end

# Test

t = Tree.new(78)
root = t.root

t.add(56)
t.add(97)
t.add(21)
t.add(67)
t.add(62)
t.add(81)
t.add(115)

p assert(root.left, 56)
p assert(root.right, 97)

p assert(root.left.left, 21)
p assert(root.left.right, 67)
p assert(root.left.right.left, 62)

p assert(root.right.left, 81)
p assert(root.right.right, 115)


###
# 2. Then perform a walk of depth first search on the model so we get result like this: 21, 56, 62, 67, 78, 81, 97, 115
###

class TreeSorted < Tree
	attr_accessor :sorted

	def initialize(value)
		super(value)
		@sorted = []
	end

	def get_sorted
		sort(@root)
	end

	private

	def sort(branch)
		if (branch.left)
			sort(branch.left)
		end		
		
		@sorted << branch.value	
		
		if (branch.right)
			sort(branch.right)	
		end
		
		@sorted
	end
end

# Test

t = TreeSorted.new(78)
root = t.root

t.add(56)
t.add(97)
t.add(21)
t.add(67)
t.add(62)
t.add(81)
t.add(115)

sorted = t.get_sorted

p assert(sorted[0], 21)
p assert(sorted[1], 56)
p assert(sorted[2], 62)
p assert(sorted[3], 67)
p assert(sorted[4], 78)
p assert(sorted[5], 81)
p assert(sorted[6], 97)
p assert(sorted[7], 115)
