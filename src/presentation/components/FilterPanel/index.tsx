import React, { useState } from 'react';
import FiltersToggleMenu from './components/FiltersToggleMenu';
import Sidebar from './components/Sidebar';

const FiltersPanel: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <FiltersToggleMenu onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default FiltersPanel;