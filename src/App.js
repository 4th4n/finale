import React from 'react';
import ProdManagement from './ProductManagement';
import StockManagement from './StockManagement';
import CategoryManagement from './CategoryManagement';
import { ProdListProvider } from './ProdListContext';
import TransactionManagement from './TransactionManagement';
import { styles } from './Styles';

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState('Product Management');

  const TabContent = () => {
    if (selectedTab === 'Product Management') {
      return <ProdManagement />;
    } else if (selectedTab === 'Stock Management') {
      return <StockManagement />;
    } else if (selectedTab === 'Category Management') {
      return <CategoryManagement />;
    } else if (selectedTab === 'Transaction Management') {
      return <TransactionManagement />;
    }
    return null;
  };

  return (
    <ProdListProvider>
      
      <div>
        
        <ul style={{ display: 'flex',listStyle: 'none', justifyContent: 'center'}}>
          <li style={{ marginRight: '10px' }}>
           <button  type="button" className="btn btn-primary custom-button table table-responsive "onClick={() => setSelectedTab('Product Management')} style={styles.sty}>Product Management</button>
          </li>
          <li style={{ marginRight: '10px' }}>
            <button type="button" className="btn btn-primary custom-button table table-responsive" onClick={() => setSelectedTab('Stock Management')} style={styles.sty}>Stock Management</button>
          </li>
          <li style={{ marginRight: '10px' }}>
            <button  type="button" className="btn btn-primary custom-button table table-responsive"onClick={() => setSelectedTab('Category Management')} style={styles.sty}>Category Management</button>
          </li>
          <li style={{ marginRight: '10px' }}>
            <button type="button" className="btn btn-primary custom-button table table-responsive" onClick={() => setSelectedTab('Transaction Management')}style={styles.sty}>Transaction Management</button>
          </li>
        </ul>
        <hr />
        {TabContent()}
      </div>
    </ProdListProvider>
  );
};

export default App;
