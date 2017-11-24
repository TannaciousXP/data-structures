#data-structures
This project was completed to understand data-structures and their functionalities.

by Peter X. Tan

- **Set** - Sets contain unique values in no particular order.
- **Tree** - A tree is a hierarchical dta structure consisting of a node (potentialy) with a children. The children are trees unto themselves, that is, nodes with (potential) children. For this reason the tree is referred to as a recursive data structure.
- **Graph** - Graphs consists of nodes (often referred to as vertices) and edges (often referred to as arcs) that connect the nodes. Unlike trees, graphs are not necessarily hierarchical. Graphs can be undirected, which means that the relationship of any 2 nodes connected by an edge is a symmetrical relationship, or they can be directed, which means there is an asymmetical relationship between nodes that are connected by an edge.
- **HashTable** - Hash tables (sometimes called hash maps) store key value pairs. They do so in a memory efficient way by using a 'hashing function' that translates keys into numerical indices located within a fixed block of memory (think about the contiguous blocks of memory used in arrays). Hash tables only increase their size in memory when necessary, and reduce their size in memory when possible.
- **Linked List** - A linked list is a dynamic data structure that allows for constant time insertion and removal at any point in the linked list. In exchange for this insertion and removal speed, linked lists are not indexed and any find operations on a link list require the linear time operation of traversing the entire linked-list fromt he beginning.
- **Binary Search Trees** - Binary trees are trees that can only have 0, 1, or 2 children. Remember that tress are recursive data structures and therefore a tree's children are themselves trees and can each have 0, 1, or 2 children. In a binary search tree, one child (out of potentially two) will always be less than the node's value (based on whatever sorting condition you wish) and the other child will always be greater than the node's value. This strcture results in a particularly fast find operations. 

### Testing

Open **_SpectRunner.html_**
