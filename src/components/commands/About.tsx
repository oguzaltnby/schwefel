import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <PreImg>
          {`
0000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000                                        00000000000     
   000000000                                  0000000000000           
      000000                            0000000000                    
        00000                   000000000000                          
           0000           0000000000000000                            
             0000    0000000000000000000000000000                     
                0 0000000000000000000000000000000000                  
               00000                     00000000000000               
             000                            0000000000000             
           00                                  000000000000           
          0                                      000000000000         
                                                   00000000000        
                                                     00000000000      
                                                      00000000000     
                                                       00000000000    
                                                        0000000000    
                                                         0000000000   
                                                          0000000000  
                                                          0000000000  
                                                          00000000000 
                                                          00000000000 
                                                           0000000000 
                                                          00000000000 
                                                          00000000000 
                                                          00000000000 
  000                                                    00000000000  
  0000000                                                00000000000  
   0000000000                                           00000000000   
    00000000000000                                     00000000000    
    00000      0000000                                000000000000    
     0000            00000                            00000000000     
      0000              0000000                     000000000000      
       0000                  000000                000000000000       
        00000                    0000000         000000000000         
          00000                      0000000   0000000000000          
            00000                         0000000000000000            
              0000000                    000000000000000              
                 00000000            0000000000000000000              
                    00000000000000000000000000000      000000         
                         00000000000000000000              000000     
                                                                0000  
         `}
        </PreImg>
    </AboutWrapper>
  );
};

export default About;
