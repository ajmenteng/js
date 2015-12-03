function node(value, left, right){
		this.value = value;
		this.left = left || null;
		this.right = right || null;
	}

	function btree(){
		this.root = null;
		this.length = null;
	}

	btree.prototype.add = function(value){
		var nd = new node(value);

		if(this.root===null){
			return this.root=nd;
		}

		var currentNode = this.root;
		var parentNode = null;
		var height = 0;
		while(currentNode){
			parentNode = currentNode;
			height += 1;
			if(value<parentNode.value){
				currentNode = parentNode.left;
				if(currentNode===null){
					if(height>this.length){
						this.length = height;
					}
					return parentNode.left = nd;
				}
			}
			else{
				currentNode = parentNode.right;
				if(currentNode===null){
					if(height>this.length){
						this.length = height;
					}
					return parentNode.right = nd;
				}
			}
		}
	}
	

	function preorder(node){
		if(node){
			console.log(node.value);	
			preorder(node.left);
			preorder(node.right);
		}
	}

	function inorder(node){
		if(node){
			inorder(node.left);
			console.log(node.value);	
			inorder(node.right);
		}
	}

	function postorder(node){
		if(node){
			postorder(node.left);	
			postorder(node.right);
			console.log(node.value);
		}
	}

	
	function depth(node){
		if(node){
			hleft=depth(node.left);
			hright=depth(node.right);
		}
		else{
			return 0;
		}
		return Math.max(hleft,hright) + 1;
	}
	
	var bt = new btree();
	bt.add(10);
	bt.add(4);
	bt.add(13);
	bt.add(1);
	bt.add(5);
	bt.add(11);

	preorder(bt.root);
	console.log("==================");
	inorder(bt.root);
	console.log("==================");
	postorder(bt.root);

	console.log("==================");
	console.log(depth(bt.root));