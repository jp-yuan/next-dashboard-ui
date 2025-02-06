'use client'

import React, { useState } from 'react';

const StudentRegistrationForm = () => {
  const [siblings, setSiblings] = useState([{ name: '', grade: '', school: '' }]);
  const [hasSiblings, setHasSiblings] = useState(false);
  const [schoolType, setSchoolType] = useState('Public');
  const [parentInfo, setParentInfo] = useState({
    guardian1: {
      name: '',
      relationship: '',
      cell: '',
      work: '',
      email: '',
      homeEmergency: '',
      occupation: '',
      homeAddress: ''
    },
    guardian2: {
      name: '',
      relationship: '',
      cell: '',
      work: '',
      email: '',
      homeEmergency: '',
      occupation: '',
      homeAddress: ''
    }
  });

  const handleSiblingChange = (index, field, value) => {
    const newSiblings = [...siblings];
    newSiblings[index][field] = value;
    setSiblings(newSiblings);
  };

  const handleAddSibling = () => {
    setSiblings([...siblings, { name: '', grade: '', school: '' }]);
  };

  const handleRemoveSibling = (index) => {
    const newSiblings = siblings.filter((_, i) => i !== index);
    setSiblings(newSiblings);
  };

  const handleParentChange = (guardian, field, value) => {
    setParentInfo((prevState) => ({
      ...prevState,
      [guardian]: {
        ...prevState[guardian],
        [field]: value
      }
    }));
  };

  return (
    <form>
      {/* Office Use Only */}
      <fieldset>
        <legend>For Office Use Only</legend>
        <label>Student ID Number: <input type="text" /></label>
        <label>Registration Date: <input type="date" /></label>
      </fieldset>

      {/* Student Information */}
      <fieldset>
        <legend>Student Information</legend>
        <label>Full Legal Name</label>
        <div>
          <label>Last: <input type="text" /></label>
          <label>First: <input type="text" /></label>
          <label>Middle: <input type="text" /></label>
        </div>
        <label>Other Name: <input type="text" /></label>
        <label>Home Address</label>
        <div>
          <label>Street: <input type="text" /></label>
          <label>City: <input type="text" /></label>
          <label>Zip Code: <input type="text" /></label>
        </div>
        <label>Birth date: <input type="date" /></label>
        <label>Gender: <input type="text" /></label>
        <label>Student Cell: <input type="tel" /></label>
        <label>Home Phone: <input type="tel" /></label>
        <label>Student Email: <input type="email" /></label>

        <div>
          <label>Do you have any siblings?</label>
          <select value={hasSiblings ? 'Yes' : 'No'} onChange={(e) => setHasSiblings(e.target.value === 'Yes')}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {hasSiblings && (
          <div>
            <h4>Siblings</h4>
            {siblings.map((sibling, index) => (
              <div key={index}>
                <label>Sibling Name: <input type="text" value={sibling.name} onChange={(e) => handleSiblingChange(index, 'name', e.target.value)} /></label>
                <label>Grade: <input type="text" value={sibling.grade} onChange={(e) => handleSiblingChange(index, 'grade', e.target.value)} /></label>
                <label>School: <input type="text" value={sibling.school} onChange={(e) => handleSiblingChange(index, 'school', e.target.value)} /></label>
                <button type="button" onClick={() => handleRemoveSibling(index)}>Remove Sibling</button>
              </div>
            ))}
            <button type="button" onClick={handleAddSibling}>Add Another Sibling</button>
          </div>
        )}
      </fieldset>

      {/* School Information */}
      <fieldset>
        <legend>School Information</legend>
        <label>School Name: <input type="text" /></label>
        <div>
          <label>
            <input type="radio" name="schoolType" value="Public" checked={schoolType === 'Public'} onChange={() => setSchoolType('Public')} /> Public
          </label>
          <label>
            <input type="radio" name="schoolType" value="Private" checked={schoolType === 'Private'} onChange={() => setSchoolType('Private')} /> Private
          </label>
        </div>
        <label>Grade Level: <input type="text" /></label>
        <label>Graduation Year: <input type="text" /></label>
      </fieldset>

      {/* Parent / Guardian Information */}
      <fieldset>
        <legend>Parent / Guardian Information</legend>
        <div>
          <h4>Parent / Guardian #1</h4>
          <label>Full Name: <input type="text" value={parentInfo.guardian1.name} onChange={(e) => handleParentChange('guardian1', 'name', e.target.value)} /></label>
          <label>Relationship: <input type="text" value={parentInfo.guardian1.relationship} onChange={(e) => handleParentChange('guardian1', 'relationship', e.target.value)} /></label>
          <label>Cellular Phone: <input type="tel" value={parentInfo.guardian1.cell} onChange={(e) => handleParentChange('guardian1', 'cell', e.target.value)} /></label>
          <label>Work Phone: <input type="tel" value={parentInfo.guardian1.work} onChange={(e) => handleParentChange('guardian1', 'work', e.target.value)} /></label>
          <label>E-mail Address: <input type="email" value={parentInfo.guardian1.email} onChange={(e) => handleParentChange('guardian1', 'email', e.target.value)} /></label>
          <label>Home / Emergency Phone: <input type="tel" value={parentInfo.guardian1.homeEmergency} onChange={(e) => handleParentChange('guardian1', 'homeEmergency', e.target.value)} /></label>
          <label>Occupation: <input type="text" value={parentInfo.guardian1.occupation} onChange={(e) => handleParentChange('guardian1', 'occupation', e.target.value)} /></label>
          <label>Home Address (if different): <input type="text" value={parentInfo.guardian1.homeAddress} onChange={(e) => handleParentChange('guardian1', 'homeAddress', e.target.value)} /></label>
        </div>

        <div>
          <h4>Parent / Guardian #2</h4>
          <label>Full Name: <input type="text" value={parentInfo.guardian2.name} onChange={(e) => handleParentChange('guardian2', 'name', e.target.value)} /></label>
          <label>Relationship: <input type="text" value={parentInfo.guardian2.relationship} onChange={(e) => handleParentChange('guardian2', 'relationship', e.target.value)} /></label>
          <label>Cellular Phone: <input type="tel" value={parentInfo.guardian2.cell} onChange={(e) => handleParentChange('guardian2', 'cell', e.target.value)} /></label>
          <label>Work Phone: <input type="tel" value={parentInfo.guardian2.work} onChange={(e) => handleParentChange('guardian2', 'work', e.target.value)} /></label>
          <label>E-mail Address: <input type="email" value={parentInfo.guardian2.email} onChange={(e) => handleParentChange('guardian2', 'email', e.target.value)} /></label>
          <label>Home / Emergency Phone: <input type="tel" value={parentInfo.guardian2.homeEmergency} onChange={(e) => handleParentChange('guardian2', 'homeEmergency', e.target.value)} /></label>
          <label>Occupation: <input type="text" value={parentInfo.guardian2.occupation} onChange={(e) => handleParentChange('guardian2', 'occupation', e.target.value)} /></label>
          <label>Home Address (if different): <input type="text" value={parentInfo.guardian2.homeAddress} onChange={(e) => handleParentChange('guardian2', 'homeAddress', e.target.value)} /></label>
        </div>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentRegistrationForm;
