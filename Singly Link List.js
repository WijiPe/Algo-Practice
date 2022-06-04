// class Node 
class Node{
    constructor(data){
      this.data = data;
      this.next = null;
    }  
  }
  
  // class SLL - Singly Linked List
  class SLL{
    constructor(){
      this.head = null;
    }
  
    insertAtBack(data){
      var newNode = new Node(data);
      if(this.head){
        var runner = this.head;
        while(runner.next){
          runner = runner.next;
        }
        runner.next = newNode;
      }else{
        this.head = newNode;
      }
    }
    //given
    printList(){
      if(!this.head){
        console.log("Empty list");
        return
      }
      var runner = this.head;
      while(runner !==null){
        console.log(runner.data);
        runner = runner.next;
      }
    }
  
        // check if the SLL includes the given data
        // return a boolean
    contains(data){

        // if(!this.head){
        //     console.log("Empty list");
        //     return
        // }
        var checkedNode = new Node(data);
       
        var runner = this.head;
            while(runner !==null){
                if(runner == checkedNode){
                    return true
                }
                runner = runner.next;
            }

            
    }
    //   use recursive for the contains methods
    // containsRecursive(data, curr=this.head){      
    //     var checkedNode = new Node(data);

    //     if(curr){
    //     var runner = this.head;
    //         while(runner !==null){
    //             if(runner == checkedNode){
    //                 return true
    //             }
    //             runner = runner.next;
    //         }
    //     }return
    
    // }

    //     // remove the last node of a SLL
    //   removeBack(){
    //   }
  
    //   average(){
    //     // loop through the SLL
    //     //find the average of all nodes
    //   }
  
  
    
  }
  

  
  var list1 = new SLL();
  var list2 = new SLL();
  list2.insertAtBack(1);
  list2.insertAtBack(2);
  list2.insertAtBack(3);
  //       HEAD
  // list2: (1) --> (2) --> (3) --> null
  
  
  list1.printList();
  list2.printList();
  
//   console.log(list2.containsRecursive(3));
  console.log(list2.contains(1))
  