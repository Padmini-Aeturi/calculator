var count=0,k=0,l=0,a=[],b=[];
function print(t)
{   var text= document.getElementById("text").value;
    var p=document.getElementById(t).value;
    text+=p;
    count++;
 console.log(text);
    document.getElementById("text").value= text;
}
function reset()
{
    document.getElementById("text").value="";
    count=0,k=0,l=0,a=[],b=[];
}
function myfunc(clicked_id)
{  
    print(clicked_id);
     var m=document.getElementById(clicked_id).value;
  if(m==="+" ||m==="-" ||m==="*" ||m==="/")
        {
            b[l]=document.getElementById(clicked_id).value;
            l++;
        }
   else
        {
        a[k]=document.getElementById(clicked_id).value;
            while(k!==l)
            {a[k-1]=a[k-1]+a[k];
                k--;
            }
        
        k++;
        }
        
}
function operation(a,b)
{   for(var i=0;i<l;i++)
        { 
          if(b[i]==="*")
                {a[i]=a[i]*a[i+1];
                 for(j=i+1;j<k-1;j++)
                     {
                     a[j]=a[j+1];
                      }
                 for(j=i;j<l-1;j++)
                     {
                     b[j]=b[j+1];
                      }
                    l--;
                 k--;
                 i=-1;
                 continue;
                }
          if(b[i]==="/")
                {a[i]=a[i]/a[i+1];
                 for(j=i+1;j<k-1;j++)
                     {
                     a[j]=a[j+1];
                      }
                 for(j=i;j<l-1;j++)
                     {
                     b[j]=b[j+1];
                      }
                    l--;
                 k--;
                 i=-1;
                continue;}
        }
        for(i=0;i<l;i++)
        { 
          if(b[i]==="+")
                {a[i]=a[i]-(-a[i+1]);
                 for(j=i+1;j<k-1;j++)
                     {
                     a[j]=a[j+1];
                      }
                 for(j=i;j<l-1;j++)
                     {
                     b[j]=b[j+1];
                      }
                    l--;
                 k--;
                 i=-1;
                continue;}
          if(b[i]==="-")
                {a[i]=a[i]-a[i+1];
                 for(j=i+1;j<k-1;j++)
                     {
                     a[j]=a[j+1];
                      }
                 for(j=i;j<l-1;j++)
                     {
                     b[j]=b[j+1];
                      }
                    l--;
                 k--;
                 i=-1;
                continue;}
        }
}
function calculate()
{   operation(a,b);
    document.getElementById("text").value=a[0];    
        }
document.getElementById("buttonac").onclick=function(){reset();}    
