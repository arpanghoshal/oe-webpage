import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 animate-gradient-subtle p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Join Operating Equity today</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <SignUp
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-none p-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: 
                  "border border-gray-300 hover:bg-gray-50 transition-colors duration-200",
                socialButtonsBlockButtonText: "text-gray-700 font-medium",
                dividerLine: "bg-gray-200",
                dividerText: "text-gray-500 text-sm",
                formFieldLabel: "text-gray-700 font-medium mb-2",
                formFieldInput: 
                  "border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                formButtonPrimary: 
                  "bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm",
                footerActionLink: 
                  "text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200",
                identityPreviewText: "text-gray-700",
                identityPreviewEditButton: "text-blue-600 hover:text-blue-700",
                formFieldSuccessText: "text-green-600",
                formFieldErrorText: "text-red-600",
                otpCodeFieldInput: "border-gray-300 rounded-lg",
                phoneInputBox: "border-gray-300 rounded-lg",
                footer: "hidden"
              },
              variables: {
                colorPrimary: "#2563EB",
                colorText: "#111827",
                colorTextSecondary: "#6B7280",
                colorBackground: "#FFFFFF",
                colorInputBackground: "#FFFFFF",
                colorInputText: "#111827",
                borderRadius: "0.5rem",
                fontFamily: "inherit"
              }
            }}
          />
        </div>
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/sign-in" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}