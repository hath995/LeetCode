// https://leetcode.com/problems/merge-k-sorted-lists

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function heap(data, comparator /*f: (a,b) => Boolean */)
{
	this.comparator = comparator;
	this.data = data;
	this.heapify = function(i){
		var left = 2*i;
		var right =2*i+1;
		var minmax=i;
		if(left-1 < this.data.length) {
			if(this.comparator(this.data[left-1],this.data[minmax-1]))
			{
				minmax = left;
			}
		}
		if(right-1 < this.data.length) {
			if(this.comparator(this.data[right-1],this.data[minmax-1]))
			{
				minmax = right;
			}
		}
		if(minmax != i)
		{
			var temp = this.data[i-1];
			this.data[i-1] = this.data[minmax-1];
			this.data[minmax-1] = temp;
			this.heapify(minmax);
		}
	};
	
	this.heapifyGeneric = function(i,width) {
		var child_indices = [];
		var minmax = i;
		for(var j=0; j < width; j++)
		{
			child_indices[j] = i*width+j;
		}
		
		for(var j=0; j < width; j++)
		{
			if(child_indices[j] < this.data.length)
			{
				if(this.comparator(this.data[child_indices[j]-1],this.data[i-1]))
				{
					minmax = child_indices;
				}
			}
		}
		if(minmax != i)
		{
			var temp = this.data[i-1];
			this.data[i-1] = this.data[minmax-1];
			this.data[minmax-1] = temp;
			this.heapify(minmax,width);
		}
	}
	
	this.buildHeap = function() {
		for(var i=Math.floor(this.data.length/2); i >0 ; i--)
		{
			this.heapify(i);
		}
	
	}
	
	this.buildHeapGeneric = function(width) {
		for(var i=Math.floor(this.data.length/width); i >0 ; i--)
		{
			this.heapifyGeneric(i,width);
		}
	}
	this.buildHeap();
	
	this.toString = function() {
		var output = "[";
		for(var i=0; i < this.data.length; i++)
		{
			output += this.data[i].ts+",";
		}
		output+="]";
		return output;
	}
	
	this.empty = function() {
		return this.data.length >0;
	}
	
	this.extractTop = function() {
		if(this.data.length <1)
		{
			return null;
		}
		var top = this.data[0];
		this.data[0] = this.data[this.data.length-1];
		this.data.length -=1;
		this.heapify(1);
		return top;
	}
	
	this.insert = function(x) {
		this.data.length +=1;
		this.data[this.data.length-1] = x;
		var i = this.data.length;
		while(i > 1 && this.comparator(this.data[i-1],this.data[this.parent(i)-1]))
		{
			var temp = this.data[this.parent(i)-1];
			this.data[this.parent(i)-1] = this.data[i-1];
			this.data[i-1] = temp;
			i = this.parent(i);
		}
	}
	
	this.parent = function(i) {
		return Math.floor(i/2);
	}
	
	this.alterKey = function(value,key) {
		for(var j = 0; j < this.data.length; j++) {
			if(this.data[j].key === key) {
				var i = j+1;
				this.data[j].ts = value;	
				/*while(i > 1 && this.comparator(this.data[i-1],this.data[this.parent(i)-1]))
				{
				var temp = this.data[this.parent(i)-1];
				this.data[this.parent(i)-1] = this.data[i-1];
				this.data[i-1] = temp;
				i = this.parent(i);
				}
				this.heapify(i);*/
				this.buildHeap();
			}
		}

	}
}

var mintimecomparator = function(a,b) {
	return a.ts < b.ts; //min heap
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let heaplist = lists.filter(x => x != null);
    
    let result: ListNode | null = null;
    let tail: ListNode | null = null;
    let klistheap = new heap(heaplist, (a,b) => a.val < b.val);
    let next: ListNode | null = null;
    while((next = klistheap.extractTop(), next != null)) {
        if(result == null) {
            result = new ListNode(next.val);
            if(next.next != null) {
                klistheap.insert(next.next);
            }
            tail = result;
        }else{
            tail.next = new ListNode(next.val);
            tail = tail.next;
            if(next.next != null) {
                klistheap.insert(next.next);
            }
        }
    } 
    return result;
};