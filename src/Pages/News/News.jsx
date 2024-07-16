import React from "react";

const notifications = [
  {
    id: 1,
    heading: "notification 1",
    description:
      "New guidelines regarding campus access and safety protocols have been implemented.",
    pdfLink: "/pdfs/campus_policy_update.pdf",
  },
  {
    id: 2,
    heading: "notification 2",
    description:
      "Join us for a virtual career fair featuring top employers in the industry.",
    pdfLink: "/pdfs/career_fair_details.pdf",
  },
  {
    id: 3,
    heading: "notification 3",
    description:
      "Please review the new course registration process for the upcoming semester.",
    pdfLink: "/pdfs/course_registration_changes.pdf",
  },
  {
    id: 4,
    heading: "notification 4",
    description:
      "Please review the new course registration process for the upcoming semester.",
    pdfLink: "/pdfs/course_registration_changes.pdf",
  },
  {
    id: 5,
    heading: "notification 5",
    description:
      "Please review the new course registration process for the upcoming semester.",
    pdfLink: "/pdfs/course_registration_changes.pdf",
  },
  {
    id: 6,
    heading: "notification 6",
    description:
      "Please review the new course registration process for the upcoming semester.",
    pdfLink: "/pdfs/course_registration_changes.pdf",
  },
  {
    id: 7,
    heading: "notification 7",
    description:
      "Please review the new course registration process for the upcoming semester.",
    pdfLink: "/pdfs/course_registration_changes.pdf",
  },
  {
    id: 8,
    heading: "notification 8",
    description:
      "Please review the new course registration process for the upcoming semester.",
    pdfLink: "/pdfs/course_registration_changes.pdf",
  },
  {
    id: 9,
    heading: "notification 9",
    description:
      "Please review the new course registration process for the upcoming semester.",
    pdfLink: "/pdfs/course_registration_changes.pdf",
  },
  {
    id: 10,
    heading: "notification 10",
    description:
      "Please review the new course registration process for the upcoming semester.",
    pdfLink: "/pdfs/course_registration_changes.pdf",
  },
];

function News() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        News and Notifications
      </h1>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Notification
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {notifications.map((notification) => (
              <tr key={notification.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {notification.heading}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    {notification.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={notification.pdfLink}
                    className="inline-block bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default News;
