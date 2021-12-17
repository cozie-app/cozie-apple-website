//
//  QuestionFlow.swift
//  Cozie
//
//  Created by MAC on 17/12/21.
//  Copyright © 2021 Federico Tartarini. All rights reserved.
//

import UIKit

class QuestionFlow: UIViewController {

    @IBOutlet weak var thermalBtn: UIButton!
    @IBOutlet weak var IDRPBtn: UIButton!
    @IBOutlet weak var PDPBtn: UIButton!
    @IBOutlet weak var MFBtn: UIButton!
    @IBOutlet weak var thermalMINIBtn: UIButton!
    @IBOutlet weak var IDRPMINIBtn: UIButton!
    @IBOutlet weak var PDPMINIBtn: UIButton!
    @IBOutlet weak var MFMINIBtn: UIButton!
    @IBOutlet weak var questionFlowSetBtn: UIButton!
    
    @IBOutlet weak var viewThermal: UIView!
    @IBOutlet weak var viewIDRP: UIView!
    @IBOutlet weak var viewPDP: UIView!
    @IBOutlet weak var viewMF: UIView!
    @IBOutlet weak var viewThermalMINI: UIView!
    @IBOutlet weak var viewIDRPMINI: UIView!
    @IBOutlet weak var viewPDPMINI: UIView!
    @IBOutlet weak var viewMFMINI: UIView!
    
    var questions:[Bool] = []
    var buttonArray:[UIButton] = []
    var viewArray:[UIView] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.questions = UserDefaults.shared.getValue(for: UserDefaults.UserDefaultKeys.questions.rawValue) as? [Bool] ?? [false,false,false,false,false,false,false,false]

        questionFlowSetBtn.layer.cornerRadius = 5
        
        buttonArray = [thermalBtn, IDRPBtn, PDPBtn, MFBtn, thermalMINIBtn, IDRPMINIBtn, PDPMINIBtn, MFMINIBtn]
        
        viewArray = [viewThermal, viewIDRP, viewPDP, viewMF, viewThermalMINI, viewIDRPMINI, viewPDPMINI, viewMFMINI]
        
        self.fillUpdata()
    
        
    }
    
    private func fillUpdata(){
        
        for i in 0...7 {
            
            buttonArray[i].isSelected = questions[i]
            viewArray[i].backgroundColor = buttonArray[i].isSelected ? UIColor.lightGray : UIColor.systemBackground
            let imgName = buttonArray[i].isSelected ? "green" : "blue"
            buttonArray[i].setImage(UIImage(named: imgName), for: .normal)
            
        }
    }

    
    @IBAction func questionValueChanged(_ sender: UIButton) {
        
        switch sender.tag {
        
        case 0:
            functionality(i: 0, view: viewThermal, button: sender)
        case 1:
            functionality(i: 1, view: viewIDRP, button: sender)
        case 2:
            functionality(i: 2, view: viewPDP, button: sender)
        case 3:
            functionality(i: 3, view: viewMF, button: sender)
        case 4:
            functionality(i: 4, view: viewThermalMINI, button: sender)
        case 5:
            functionality(i: 5, view: viewIDRPMINI, button: sender)
        case 6:
            functionality(i: 6, view: viewPDPMINI, button: sender)
        case 7:
            functionality(i: 7, view: viewMFMINI, button: sender)
            
        default:
            return
        }
        
    }
    
    private func functionality(i: Int, view: UIView, button: UIButton){
        
        button.isSelected = !button.isSelected
        self.questions[i] = button.isSelected
        view.backgroundColor = button.isSelected ? UIColor.lightGray : UIColor.systemBackground
        let imgName = button.isSelected ? "green" : "blue"
        button.setImage(UIImage(named: imgName), for: .normal)
        
    }
    
    
    @IBAction func onClickSet(_ sender: Any) {
        
        UserDefaults.shared.setValue(for: UserDefaults.UserDefaultKeys.questions.rawValue, value: self.questions)
        
    }
    

}
