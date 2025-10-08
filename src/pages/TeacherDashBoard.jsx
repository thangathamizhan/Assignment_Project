import React, { useState } from "react";
import Button from "../components/Button";
import {
  Plus,
  BookOpen,
  FileText,
  Clock,
  CheckCircle,
  Calendar,
  Users,
  Pencil,
} from "lucide-react";
import Input_ from "../components/Input_label";
import Label from "../components/Label";
import Input from "../components/Input";

const TeacherDashBoard = () => {
  const [isModelOpen, setModalOpen] = useState(false);
  const [assignment, setAssignments] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [subModal, setSubmodal] = useState(false);
  const [newAssignment, setNewAssingments] = useState({
    title: "",
    description: "",
    deadline: "",
  });
  const [grade, setGrade] = useState(false);
  const [feedBack, setFeedBack] = useState("");

  const openmodel = () => {
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  };
  const closeModel = () => {
    document.body.style.overflow = "";
    setModalOpen(false);
  };
  const subOpenModal = () => {
    document.body.style.overflow = "hidden";
    setSubmodal(true);
  };
  const subCloseModal = () => {
    document.body.style.overflow = "";
    setSubmodal(false);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back Mr Abi
            </h1>
            <p className="text-gray-600">
              Manage your assignments and review student submissions.
            </p>
          </div>
          <Button
            size="md"
            onClick={openmodel}
            className="flex items-center space-x-2 px-4 py-2 whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            <span>Create Assignment</span>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 font-medium text-sm mb-1">
                  Total Assignments
                </p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 font-medium text-sm mb-1">
                  Total Submissions
                </p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-green-50 rounded-lg">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 font-medium text-sm mb-1">Graded</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 font-medium text-sm mb-1">
                  Total Pending Grade
                </p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg">
                <Clock className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Assignments Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Assignments
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  React Assignments
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
                  Create a set of reusable React components with proper props and
                  state management.
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Due: Jan 15, 2025, 11:59 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Submissions: 15/20</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={subOpenModal}
                  className="w-full font-medium text-gray-700 border-gray-300 hover:bg-gray-50"
                >
                  View Submissions(0)
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Create Assignment Modal */}
        {isModelOpen && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={closeModel}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-lg rounded-lg p-6 relative shadow-lg"
            >
              <button
                onClick={closeModel}
                className="absolute top-4 right-4 w-6 h-6 text-gray-500 hover:text-gray-700 flex items-center justify-center"
              >
                &times;
              </button>
              <h2 className="text-lg font-bold mb-4 text-gray-900">
                Create New Assignment
              </h2>
              <Input_
                label="Assignment Title"
                className="mb-4"
                placeholder="Enter the Assignment title"
              />
              <Label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2">
                Description
              </Label>
              <textarea
                name="descriptionName"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                placeholder="Enter the Description and Requirements"
                id="description"
                rows="4"
              ></textarea>
              <Input_ label="Deadline" type="datetime-local" />

              <div className="flex space-x-3 mt-6">
                <Button className="flex-1">Create Assignment</Button>
                <Button
                  variant="outline"
                  onClick={closeModel}
                  className="text-gray-700 font-medium border-gray-300"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Submissions Modal */}
        {subModal && (
          <div
            onClick={subCloseModal}
            className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-3xl rounded-lg p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Submission for Analyse Report
              </h2>
              {submissions.length > 0 ? (
                <div className="py-8 text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-gray-900 text-lg font-medium mb-2">
                    No submission Yet
                  </h3>
                  <p className="text-gray-600">
                    Student submissions will appear here once they submit their
                    work.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                      <Users className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Abineshr
                      </h3>
                      <p className="text-gray-600 font-medium">
                        alice.johnson@university.edu
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">File: react-components-alice.zip</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Submitted: Dec 14, 2024, 06:30 PM</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 border-t border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Grade</span>
                    <div className="flex space-x-3 items-center">
                      <span className="text-xl font-bold text-green-600">
                        95/100
                      </span>
                      <Pencil
                        className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800"
                        onClick={() => setGrade(true)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-gray-800 font-medium">Feedback:</h4>
                    {grade ? (
                      <div className="space-y-4">
                        <Input
                          type="text"
                          className="block w-full"
                          onChange={(e) => setFeedBack(e.target.value)}
                        />
                        <div className="flex space-x-3">
                          <Button variant="success" onClick={() => setGrade(false)} className="flex items-center space-x-2">
                            <FileText className="w-4 h-4"/>
                            <span>Save Grade</span>
                          </Button>
                          <Button onClick={() => setGrade(false)}>Cancel</Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                        {feedBack}
                      </p>
                    )}
                    
                    <Button
                      variant="outline"
                      className="w-full text-gray-700 font-medium flex items-center justify-center space-x-2 border-gray-300 hover:bg-gray-50"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Download submission</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashBoard;