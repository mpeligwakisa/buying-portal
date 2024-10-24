import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Buyers = () => {
  const [buyers, setBuyers] = useState([
    {
      id: 1,
      name: 'John Doe',
      company: 'ABC Corp',
      email: 'john@example.com',
      phone: '123-456-7890'
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'company', label: 'Company' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const buyerData = {
      id: currentBuyer?.id || Date.now(),
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone')
    };

    if (currentBuyer) {
      setBuyers(buyers.map(buyer => 
        buyer.id === currentBuyer.id ? buyerData : buyer
      ));
    } else {
      setBuyers([...buyers, buyerData]);
    }
    setIsModalOpen(false);
    setCurrentBuyer(null);
  };

  const handleEdit = (buyer) => {
    setCurrentBuyer(buyer);
    setIsModalOpen(true);
  };

  const handleDelete = (buyer) => {
    if (window.confirm('Are you sure you want to delete this buyer?')) {
      setBuyers(buyers.filter(b => b.id !== buyer.id));
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Here you would typically process the Excel file
      console.log('Processing file:', file);
      setIsUploadModalOpen(false);
    }
  };

  const filteredBuyers = buyers.filter(buyer =>
    Object.values(buyer).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const BuyerForm = ({ buyer }) => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <Input
          name="name"
          defaultValue={buyer?.name}
          required
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Company</label>
        <Input
          name="company"
          defaultValue={buyer?.company}
          required
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input
          name="email"
          type="email"
          defaultValue={buyer?.email}
          required
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <Input
          name="phone"
          type="tel"
          defaultValue={buyer?.phone}
          required
          className="w-full"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </Button>
        <Button type="submit">
          {buyer ? 'Update' : 'Add'} Buyer
        </Button>
      </div>
    </form>
  );

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Buyers Registration</h1>
          <div className="space-x-4">
            <Button
              onClick={() => setIsUploadModalOpen(true)}
              variant="outline"
            >
              Upload Excel
            </Button>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Buyer
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <Input
            type="search"
            placeholder="Search buyers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                {columns.map(column => (
                  <th
                    key={column.key}
                    className="text-left p-4 bg-gray-50 font-medium"
                  >
                    {column.label}
                  </th>
                ))}
                <th className="text-left p-4 bg-gray-50 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBuyers.map(buyer => (
                <tr key={buyer.id} className="border-t">
                  {columns.map(column => (
                    <td key={column.key} className="p-4">
                      {buyer[column.key]}
                    </td>
                  ))}
                  <td className="p-4">
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(buyer)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(buyer)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {currentBuyer ? 'Edit' : 'Add'} Buyer
              </DialogTitle>
            </DialogHeader>
            <BuyerForm buyer={currentBuyer} />
          </DialogContent>
        </Dialog>

        <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload Excel File</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileUpload}
              />
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  onClick={() => setIsUploadModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

export default Buyers;